import cv2
import mediapipe as mp
import numpy as np

# Color definitions
ANGLE_TXT_COLOR = (0, 255, 0)  # Green
COUNTER_COLOR = (0, 0, 255)   # Red
LANDMARK_COLOR = (245, 177, 66)  # Orange
CONNECTION_COLOR = (245, 66, 230)  # Pink

mp_drawing = mp.solutions.drawing_utils
mp_pose = mp.solutions.pose

cap = cv2.VideoCapture(1)
cap.set(3, 1280)  # Set width
cap.set(4, 720)  # Set height

# Counters and detection flags for both arms
left_counter = 0
right_counter = 0
left_detect = False
right_detect = False

def calculate_angle(a, b, c):
    a = np.array(a)
    b = np.array(b)
    c = np.array(c)

    ab = a - b
    bc = c - b

    dot_product = np.dot(ab, bc)
    magnitude_ab = np.linalg.norm(ab)
    magnitude_bc = np.linalg.norm(bc)

    cos_theta = dot_product / (magnitude_ab * magnitude_bc)
    angle = np.arccos(np.clip(cos_theta, -1.0, 1.0))
    angle = np.degrees(angle)

    return angle

with mp_pose.Pose(min_detection_confidence=0.5, min_tracking_confidence=0.5) as pose:
    while cap.isOpened():
        ret, img = cap.read()
        if not ret:
            print("Failed to grab frame")
            break

        # Convert to RGB for processing
        image = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        image.flags.writeable = False

        results = pose.process(image)

        image.flags.writeable = True
        image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)

        # Draw landmarks and text
        if results.pose_landmarks:
            mp_drawing.draw_landmarks(
                image,
                results.pose_landmarks,
                mp_pose.POSE_CONNECTIONS,
                mp_drawing.DrawingSpec(color=LANDMARK_COLOR, thickness=2, circle_radius=2),
                mp_drawing.DrawingSpec(color=CONNECTION_COLOR, thickness=2, circle_radius=2)
            )

            landmarks = results.pose_landmarks.landmark

            # Left arm landmarks
            left_shoulder = [landmarks[mp_pose.PoseLandmark.LEFT_SHOULDER.value].x,
                             landmarks[mp_pose.PoseLandmark.LEFT_SHOULDER.value].y]
            left_elbow = [landmarks[mp_pose.PoseLandmark.LEFT_ELBOW.value].x,
                          landmarks[mp_pose.PoseLandmark.LEFT_ELBOW.value].y]
            left_wrist = [landmarks[mp_pose.PoseLandmark.LEFT_WRIST.value].x,
                          landmarks[mp_pose.PoseLandmark.LEFT_WRIST.value].y]

            left_angle = calculate_angle(left_shoulder, left_elbow, left_wrist)

            if left_angle > 160 and not left_detect:
                left_detect = True
                left_counter += 1
            if left_angle < 40:
                left_detect = False

            # Right arm landmarks
            right_shoulder = [landmarks[mp_pose.PoseLandmark.RIGHT_SHOULDER.value].x,
                              landmarks[mp_pose.PoseLandmark.RIGHT_SHOULDER.value].y]
            right_elbow = [landmarks[mp_pose.PoseLandmark.RIGHT_ELBOW.value].x,
                           landmarks[mp_pose.PoseLandmark.RIGHT_ELBOW.value].y]
            right_wrist = [landmarks[mp_pose.PoseLandmark.RIGHT_WRIST.value].x,
                           landmarks[mp_pose.PoseLandmark.RIGHT_WRIST.value].y]

            right_angle = calculate_angle(right_shoulder, right_elbow, right_wrist)

            if right_angle > 160 and not right_detect:
                right_detect = True
                right_counter += 1
            if right_angle < 40:
                right_detect = False

            # Draw the angle text for left arm
            cv2.putText(image, f'Left Angle: {int(left_angle)}',
                        (50, 80),  # Moved down
                        cv2.FONT_HERSHEY_SIMPLEX, 1, ANGLE_TXT_COLOR, 2, cv2.LINE_AA
                        )

            # Draw the angle text for right arm
            cv2.putText(image, f'Right Angle: {int(right_angle)}',
                        (50, 120),  # Moved down
                        cv2.FONT_HERSHEY_SIMPLEX, 1, ANGLE_TXT_COLOR, 2, cv2.LINE_AA
                        )

            # Draw the bicep curl counters for both arms in red at the top of the frame
            counter_text = f'Left Curls: {right_counter-1} | Right Curls: {left_counter-1}'
            cv2.putText(image, counter_text,
                        (50, 30),  # Position for the counter text
                        cv2.FONT_HERSHEY_SIMPLEX, 1, COUNTER_COLOR, 2, cv2.LINE_AA
                        )

        # Display the image with the larger resolution
        cv2.imshow('Mediapipe Feed', image)

        if cv2.waitKey(10) & 0xff == ord('q'):
            break

cap.release()
cv2.destroyAllWindows()
