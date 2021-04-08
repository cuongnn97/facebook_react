import React, {Component} from 'react';

class Test extends Component {
    constructor(props, context) {
        super(props, context);
    }

    modifyTask(event) {
        event.preventDefault();
        var a = document.getElementsByClassName("ToDoInput")[0].value;
        alert(a);
        //window.location.reload();
    }

    render() {
        return (

          <form onSubmit={(e)=>this.modifyTask(e)}>
              <input
                  className="ToDoInput" />
              <button type="submit" className="ToDoSubmit" hidden> Edit </button>
          </form>
        );
    }
}

export default Test;
