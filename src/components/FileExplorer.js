import React, { Component } from 'react';
import styled from 'styled-components';
import Tree from './Tree';

export default class FileExplorer extends Component {
state = {
    selectedFile: null;
};

onSelect = (file) => this.setState({ selectedFile: file });

render() {
    const { selectedFile } = this.state;

}
}
