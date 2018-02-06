import React from 'react';
import _ from 'lodash';
import ProjectTabs from './ProjectTabs';
import Project from './ProjectView';
import projectData from '../assets/projects';

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      active: 'all',
      projects: projectData,
      project: {},
    };
    this.onSelect = this.onSelect.bind(this);
    this.isSelected = this.isSelected.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  onSelect(e) {
    this.setState({ active: e, project: this.state.projects[e] });
  }

  onKeyPress(e) {
    if (e.key === 'Enter') {
      this.onSelect(e.target.className);
    }
  }

  isSelected(el) {
    return el === this.state.active ? 'is-active' : null;
  }

  displayType() {
    const all = _.map(this.state.projects, (project, i) => <Project {...project} key={i} />);
    return this.state.active === 'all'
      ? <div className="container">{all}</div>
      : <Project {...this.state.project} />
  }

  render() {
    return (
      <div className="hero is-bold is-light is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="title level-item">Projects</div>
            <div className="container">
              <ProjectTabs
                onSelect={this.onSelect}
                isSelected={this.isSelected}
                onKeyPress={this.onKeyPress}
              />
              <div className="container">
                <Project />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
