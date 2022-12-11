import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import { Image, List } from "semantic-ui-react";
import { Profile } from "../../../app/models/profile";

interface Props {
  attendees: Profile[];
}

const ActivityListItemAttendee = ({ attendees }: Props) => {
  return (
    <List horizontal>
      {attendees.map((attendee) => (
        <List.Item key={attendee.username} as={Link} to={`/profiles/${attendee.username}`}>
            <Image size="mini" circular src={attendee.image || require('../../../assets/images/user.png')}/>
        </List.Item>
      ))}
    </List>
  );
};

export default observer(ActivityListItemAttendee);
