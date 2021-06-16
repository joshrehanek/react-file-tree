import React from 'react';
import { FaFile, FaFolder, FaFolderOpen, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import styled from 'styled-components';
import last from 'lodash/last';
import PropTypes from 'prop-types';

const getNodeLabel = (node) => last(node.path.split('/'));



export default function TreeNode() {
    return (
        <div>
            
        </div>
    )
}
