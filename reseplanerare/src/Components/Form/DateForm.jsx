
function DateForm({ date, setDate }) {
    return (
        <div>
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />
        </div>
    );
}

export default DateForm;