import React from 'react';
import { FaFile, FaFolder, FaFolderOpen, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import styled from 'styled-components';
import last from 'lodash/last';
import PropTypes from 'prop-types';

const getNodeLabel = (node) => last(node.path.split('/'));

const TreeNode = (props) => {
    const { node, getChildNodes, level } = props;

    return (
        <>
            <div level={level} type={node.type}>
                <div>
                    {node.type === 'folder' && (node.isOpen ? <FaChevronDown /> : <FaChevronRight /> )}
                </div>

                <div marginRight={10}>
                    { node.type === 'file' && <FaFile /> }
                    { node.type === 'folder' && node.isOpen === true && <FaFolderOpen />}
                    { node.type === 'folder' && !node.isOpen === true && <FaFolder />}
                </div>

                <span role='button'>
                    { getNodeLabel(node) }
                </span>
            </div>

            { node.isOpen && getChildNodes(node).map(childNode => (
                <TreeNode
                {...props}
                node={childNode}
                level={level + 1}
                />
            ))}
        </>
    )
}

export default TreeNode;
