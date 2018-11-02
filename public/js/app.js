
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
      <div>Editable Timer List component</div>
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

ReactDOM.render(
  <TimersDashboard />,
  document.getElementById('content')
);
