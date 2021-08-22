const ErrorDisplay = ({
    errors,
}) => {
    return <div id="errors-display" className="border-2 rounded-md border-red-600 py-2 px-3 text-red-600 ">
        <h1 className="text-lg font-bold">Errors</h1>
        <ol className="text-sm text-justify">
            {errors.map((error, index) =>
                <li key={index} className="pt-2">{error}</li>
            )}
        </ol>
    </div>
};

export default ErrorDisplay;