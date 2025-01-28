function ActivityForm({ activity, setActivity }) {
  return (
    <div className="activityForm">
      <input
        type="text"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
        placeholder="Aktivitet"
        required
      />
    </div>
  );
}

export default ActivityForm;
