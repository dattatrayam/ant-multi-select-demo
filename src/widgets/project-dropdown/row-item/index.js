import './style.css';

function ProjectRowItem(rowData) {
    const rowLabel = rowData.id;
    return (
        <div className="wrapper">
            <div className="heading">
                <div>{rowData?.project}</div>
                <div>{rowData?.manager}</div>
            </div>
            <div className="content">{rowData?.deadline}</div>
        </div>
    )
}

export default ProjectRowItem;



