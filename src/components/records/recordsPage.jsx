const recordsPage = ({isRecordsOpen}) => {
    return <>
        <div className={`
        pt-6 ${isRecordsOpen ? "" : "hidden"}
        `}>
            Records Page
        </div>
    </>
};

export default recordsPage;