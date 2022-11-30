import { observer } from "mobx-react-lite";
import React from "react";
import { Grid } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { useStore } from "../../../app/stores/store";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";

interface Props {
  deleteActivity: (id: string) => void;
}

const ActivityDashboard = ({
  deleteActivity,
}: Props) => {
  const { activityStore } = useStore();

  const { selectedActivity, editMode } = activityStore;

  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList deleteActivity={deleteActivity} />
      </Grid.Column>
      <Grid.Column width="6" className="activityDetails">
        {selectedActivity && !editMode && <ActivityDetails />}
        {editMode && (
          <ActivityForm />
        )}
      </Grid.Column>
    </Grid>
  );
};

export default observer(ActivityDashboard);
