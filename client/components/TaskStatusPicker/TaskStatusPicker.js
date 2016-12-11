import React from 'react';
import TaskStatusPickerOption from './TaskStatusPickerOption/TaskStatusPickerOption';

export default class TaskStatusPicker extends React.Component {
    static propTypes = {
        taskId: React.PropTypes.string.isRequired,
        currentStatus: React.PropTypes.string.isRequired,
        statusList: React.PropTypes.array.isRequired,
        onClick: React.PropTypes.func.isRequired
    }

    render() {
        return (
            <div class="btn-group">
                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {this.props.currentStatus}&nbsp;<span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                    <li className="dropdown-header">Change the status</li>
                    {this.props.statusList.map(s => <TaskStatusPickerOption key={s.label} label={s.label} taskId={this.props.taskId} onClick={this.props.onClick}/>)}
                </ul>
            </div>
        );
    }
}
