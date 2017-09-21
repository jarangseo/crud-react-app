import React, { PropTypes } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class CourseList extends React.Component {
    constructor(props) {
        super(props);

        this.options = {
            sortIndicator: true,
            noDataText: 'NO data'
        };

        this.selectRowProp = {
            mode: 'radio',
            bgColor: '#c1f291',
            onSelect: props.handleRowSelect,
            clickToSelect: true,
            hideSelectColumn: true
        };
    }

    render() {
        console.log(this.props.courses);
        return (
            <BootstrapTable data={this.props.courses} selectRow={this.selectRowProp} options={this.options} bordered={false} striped hover condensed>
                <TableHeaderColumn dataField="id" isKey hidden>
                    Id
                </TableHeaderColumn>

                <TableHeaderColumn
                    dataField="title"
                    dataSort={true}
                    filter={{type: 'TextFilter', delay: 0}}
                    columnTitle
                >
                    Title
                </TableHeaderColumn>

                <TableHeaderColumn
                    dataField="length"
                    dataSort={true}
                    columnTitle>
                    Length
                </TableHeaderColumn>

                <TableHeaderColumn
                    dataField="category"
                    dataSort={true}
                    filter={{type: 'TextFilter', delay: 0}}
                    columnTitle
                >
                    Category
                </TableHeaderColumn>

                <TableHeaderColumn
                    datField="authorId"
                    dataSort={true}
                    filter={{type: 'TextFilter', delay: 0}}
                    columnTItle
                >
                    Author
                </TableHeaderColumn>
            </BootstrapTable>
        )
    }
}

CourseList.propTypes = {
    courses: PropTypes.array.isRequired,
    handleRowSelect: PropTypes.func.isRequired
}

export default CourseList;