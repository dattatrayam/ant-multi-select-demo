import { Select } from "antd";
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import "antd/dist/antd.css";
const { Option, Tag } = Select;

function SelectComponent({ data, multiple, defaultValue, maxItems, maxListHeight, maxListWidth, rowTemplate, loadNextPage }) {
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [options, setOptions] = useState([]);

    const onScroll = (event) => {
        const target = event.target;
        if ((!loading && target.scrollTop + target.offsetHeight === target.scrollHeight)) {
            setLoading(true);
            target.scrollTo(0, target.scrollHeight)
        }
    }
    useEffect(() => {
        if ((loading && data.length === 0) || loading) {
            setTimeout(() => {
                loadNextPage();
                setLoading(false);
            }, 1000)

        }
    }, [loading]);

    useEffect(() => {
        if (!Array.isArray(data)) data = [];
        const selectedOptions = data?.map((item, index) => {
            return (<Option key={index} title={item.id} value={item.id}>
                {rowTemplate(item)}
            </Option>)
        });
        setOptions(selectedOptions);
    }, [data]);

    const handleSearch = (newValue) => {
        setSearch(newValue);
    };


    return (
        <Select
            mode={multiple ? "multiple" : ""}
            showSearch
            allowClear
            labelInValue
            style={{ width: maxListWidth }}
            defaultValue={defaultValue}
            listHeight={maxListHeight}
            onPopupScroll={onScroll}
            onSearch={handleSearch}
            placeholder="Please select"
        >
            {!loading ? options : [...options, <Option key="loading">Loading...</Option>]}
        </Select>
    )
}
SelectComponent.defaultProps = {
    defaultValue: [],
    maxItems: 5,
    maxHeight: 50,
    maxListHeight: 200,
    maxListWidth: 320,
}
SelectComponent.propTypes = {
    multiple: PropTypes.bool.isRequired,
    data: PropTypes.array.isRequired,
    defaultValue: PropTypes.array,
    maxItems: PropTypes.number,
    maxHeight: PropTypes.number,
    maxListHeight: PropTypes.number,
    maxListWidth: PropTypes.number,
    rowTemplate: PropTypes.func.isRequired,
    loadNextPage: PropTypes.func.isRequired
};
export default SelectComponent;

