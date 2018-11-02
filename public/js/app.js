
class TimersDashboard extends React.Component {
  render(){
    return(
      <div className='ui three column centered grid'>
          <div className='column'>
              <EditableTimerList />
              <ToggleableTimerForm
                isOpen={true}
              />
          </div>
      </div>
    );
  }
}

class EditableTimerList extends React.Component {
  render(){
    return(
      <div id='timers'>
          <EditableTimer
            title='Learn React'
            project='Web Domination'
            elapsed='8986300'
            runningSince={null}
            editFormTimer={false}
          />
          <EditableTimer
            title='Learn extreme ironing'
            project='World Domination'
            elapsed='3890985'
            runningSince={null}
            eidtForm={true}
            />
      </div>
    );
  }
}

class ToggleableTimerForm extends React.Component {
  render(){
    return(
      <div> Toggleable Timer Form component </div>
    );
  }
}

class EditableTimer extends React.Component {
  render(){
      if (this.props.editFormOpen) {
        return(
          <TimerForm
          title={this.props.title}
          project={this.props.project}
          />
        );
      } else {
        return (
          <Timer
            title={this.props.title}
            project={this.props.project}
            elapsed={this.props.elapsed}
            runningSince={this.props.runningSince}
          />
        );
      }
  }
}

ReactDOM.render(
  <TimersDashboard />,
  document.getElementById('content')
);
