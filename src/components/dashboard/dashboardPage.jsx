const dashboardPage = ({isDashboardOpen}) => {
    return <>
        <div className={`
        pt-6 ${isDashboardOpen ? "" : "hidden"}
        `}>
            <div>Dashboard Page (Under construction...)</div>
        </div>
    </>
};

export default dashboardPage;