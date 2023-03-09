const JobCard = (props) => {
    const {
        jobRec
    } = props;

    return(
        <section>
            <header>
                <h1>{jobRec.title}</h1>
                <article>
                    <span>Logo</span>
                    <span>{jobRec.company.name}</span>
                </article>
                <article>
                <span>Logo</span>
                    <span>{jobRec.location}</span>
                </article>
            </header>
            <ul>
                <li>Total of {jobRec.experience} + years of experience using {jobRec.skills}.</li>
                <li>{jobRec.skills}(Mandatory) </li>
            </ul>

        </section>
    )
}
export default JobCard;