import React from 'react';
import { FaFile, FaFolder, FaFolderOpen, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import styled from 'styled-components';
import last from 'lodash/last';
import PropTypes from 'prop-types';

const getNodeLabel = (node) => last(node.path.split('/'));

const TreeNode = (props) => {
    const { node, getChildNodes, level } = props;

    return (
        
    )
}

export default TreeNode;
