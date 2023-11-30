const Holidays = ({ holidays }) => {
    return (
        <div className="Holidays">
            <table className="holidays-table-header">
                <thead>
                <tr>
                    <th> Id </th>
                    <th> Name </th>
                    <th> Date </th>
                </tr>
                </thead>
            </table>

            <div className="holidays-table-body-wrapper">
                <table className="holidays-table-body">
                    <tbody>
                    {holidays.map(holidays => (
                        <tr key={holidays.holiday_id}>
                            <td>{holidays.holiday_id}</td>
                            <td>{holidays.holiday_name}</td>
                            <td>{holidays.holiday_date.slice(0, 10)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Holidays;