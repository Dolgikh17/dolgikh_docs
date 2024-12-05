CREATE TABLE User (
    userID CHAR(36) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL
);

CREATE TABLE Place (
    placeID CHAR(36) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    type ENUM('Restaurant', 'Cafe', 'Fastfood') NOT NULL,
    address VARCHAR(255) NOT NULL
);

CREATE TABLE Meeting (
    meetingID CHAR(36) PRIMARY KEY,
    placeID CHAR(36) NOT NULL,
    organizerID CHAR(36) NOT NULL,
    title VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    time TIME NOT NULL,
    FOREIGN KEY (placeID) REFERENCES Place(placeID),
    FOREIGN KEY (organizerID) REFERENCES User(userID)
);

CREATE TABLE Reservation (
    reservationID CHAR(36) PRIMARY KEY,
    meetingID CHAR(36) NOT NULL,
    status ENUM('No_Place', 'Confirmed', 'Declined') NOT NULL,
    FOREIGN KEY (meetingID) REFERENCES Meeting(meetingID)
);

CREATE TABLE Meeting_Participants (
    meeting_partID CHAR(36) PRIMARY KEY,
    meetingID CHAR(36) NOT NULL,
    userID CHAR(36) NOT NULL,
    role ENUM('Organizer', 'Participant') NOT NULL,
    FOREIGN KEY (meetingID) REFERENCES Meeting(meetingID),
    FOREIGN KEY (userID) REFERENCES User(userID)
);

CREATE INDEX index_meeting_place ON Meeting (placeID);
CREATE INDEX index_meeting_organizer ON Meeting (organizerID);
CREATE INDEX index_reservation_meeting ON Reservation (meetingID);
CREATE INDEX index_participants_meeting ON Meeting_Participants (meetingID);
CREATE INDEX index_participants_user ON Meeting_Participants (userID);
