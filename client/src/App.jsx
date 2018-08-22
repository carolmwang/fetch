import React, { Component } from 'react';
import DogsIndex from './components/DogsIndex';
import UpdateDog from './components/UpdateDog';
import PupProfile from './components/PupProfile';
import CreateForm from './components/CreateForm';
import GradeBook from './components/GradeBook'
import Header from './components/Header';
import './index.css';
import UpdateGrades from './components/UpdateGrades';


import {
  fetchDogs,
  fetchOneDog,
  updateDoggy,
  fetchOneGrade,
  updateGrades,
  saveNewDog,
  fetchAllGrades,
  deleteDog,
} from './services/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: [],
      dogGrade:[],
      dogs: [],
      selectedDog: '',
      currentView: 'All Dogs',
    }
    // this.fetchOne = this.fetchOne.bind(this);
    this.createDog = this.createDog.bind(this);
    this.updateDoggy = this.updateDoggy.bind(this);
    this.editDogGrades = this.editDogGrades.bind(this);
    this.selectDog = this.selectDog.bind(this);
    this.editDog = this.editDog.bind(this);
    this.handleDeleteDog = this.handleDeleteDog.bind(this);

  }

  componentDidMount() {
    fetchDogs()
      .then(data => this.setState({ dogs: data.dogs }));
    fetchAllGrades()
      .then(data => this.setState({ grades: data.grades }));
  };

  // select one dog & set state
<<<<<<< HEAD
  fetchOne(id) {
    fetchOneDog(id)
      .then(data => this.setState({
        dogs: data.dog,
        currentView: 'Pup Profile'
      }))
  };

  selectDog(dog) {
=======
  // fetchOne(id) {
  //   fetchOneDog(id)
  //     .then(data => this.setState({
  //       dogs: data.dog,
  //       currentView: 'Pup Profile'
  //     }))
  // };

  selectDog(dog,grades) {
>>>>>>> 70582e31a290971e5a42e644a6736967378e3fa4
    this.setState({
      selectedDog: dog,
      dogGrade: grades[0],
      currentView: 'Pup Profile'
    })
  };

  editDog(dog) {
    this.setState({
      selectedDog: dog,
      currentView: 'Update Dog'
    })
  }

  editGrade(grades) {

  }

  // create dog function
  createDog(dog) {
    saveNewDog(dog)
      .then(data => fetchDogs())
      .then(data => {
        this.setState({
          currentView: 'All Dogs',
          dogs: data.dogs
        });
      })
  };


  // edit dog function
  updateDoggy(dog) {
    console.log(dog)
    updateDoggy(dog)
      .then(data => fetchDogs())
      .then(data => {
        this.setState({
          currentView: 'All Dogs',
          dogs: data.dogs
        });
      })
  };

  // delete dog function

  handleDeleteDog(dog) {
    deleteDog(dog)
    this.setState({
      selectedDog: dog,
      currentView: 'Delete Dog'
    })
  }

  // edit dog grade function
<<<<<<< HEAD
  editDogGrades(id) {
    updateGrades(id)
      .then(data => this.fetchOne(id))
      .then(data => {
        this.setState({
          currentView: 'Pup Profile',
=======
  editDogGrades(dog) {
    updateGrades(dog)
      .then(data => this.fetchOne(dog))
      .then(data => {
        this.setState({
          currentView: 'All Dogs',
>>>>>>> 70582e31a290971e5a42e644a6736967378e3fa4
          dogs: data.dog
        })
      })
  }

  // select grade function
  // create grade function? tbd


  // SWITCH statement for which page to view
  determineWhichToRender() {
    const { currentView } = this.state;
    const { dogs, selectedDog } = this.state;

    switch (currentView) {
      case 'All Dogs':
        return <DogsIndex
<<<<<<< HEAD
=======
          grades={this.state.grades}
>>>>>>> 70582e31a290971e5a42e644a6736967378e3fa4
          dogs={this.state.dogs}
          oneDog={this.fetchOne}
          newDog={this.createDog}
          selectDog={this.selectDog}
        />
      case 'Pup Profile':
        const dog = dogs.find(dog => dog.id === selectedDog.id)
        return <PupProfile
          dogs={dogs}
          editDog={this.editDog}
          handleDeleteDog={this.handleDeleteDog}
          dog={selectedDog}
        />;
      case 'Create Pup':
        return <CreateForm newDog={this.createDog}
        />
      case 'Update Dog':
<<<<<<< HEAD
        return <UpdateDog
          dogs={dogs}
          dog={dog}
          selectedDog={this.state.selectedDog}
          onSubmit={this.updateDoggy}
        />
=======
        return (
          <div>
            <UpdateDog
              dogs={dogs}
              selectedDog={this.state.selectedDog}
              onSubmit={this.updateDoggy}
            />
            <UpdateGrades
            selectedDog={this.state.selectedDog}
            onSubmit={this.editDogGrades}/>
          </div>
        )
>>>>>>> 70582e31a290971e5a42e644a6736967378e3fa4
      case 'Gradebook':
        return <GradeBook grades={this.state.grades} />
    }
  }

  handleLinkClick(link) {
    this.setState({ currentView: link });
  }

  render() {
    const links = [
      'All Dogs',
      'Pup Profile',
      'Create Pup',
      'Update Dog',
      'Gradebook'
    ]
    return (
      <div className="App">
        <Header
          onClick={this.handleLinkClick.bind(this)}
          links={links} />
        {this.determineWhichToRender()}
      </div>
    );
  }
}

export default App;
