const dashboardPage = ({isDashboardOpen}) => {
    return <>
        <div className={`
        pt-6 ${isDashboardOpen ? "" : "hidden"}
        `}>
            Dashboard Page
        </div>
    </>
};

export default dashboardPage;