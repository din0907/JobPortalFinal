const JobFilter = (props) => {
    const {
        jobFilterJSON
    } = props;
    return (
        <div className="c-filter-wrapper">
            <div className="c-all-job-filter">
                <label>All Filters</label>
                <span>Applied (1)</span>
            </div>
            {Object.keys(jobFilterJSON).map((key) => {
                return <section>
                    {key}
                    <ul>
                    {jobFilterJSON[key].map((rec) => {
                       return <li>
                            <input type='checkbox'/>
                            <label>{rec.title} ({rec.totalJob}</label>
                       </li>
                    })}
                    </ul>
                </section>
            })}
            
        </div>
    )
}
export default JobFilter;