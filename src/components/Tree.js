import React, { Component } from 'react';
import values from 'lodash/values';
import TreeNode from './TreeNode';


const data = {
    '/root': {
        path: '/root',
        type: 'folder',
        isRoot: true,
        children: ['/root/josh', '/root/jsrehanek'],
    },
    '/root/josh': {
        path: '/root/josh',
        type: 'folder',
        children: ['/root/josh/readme.md'],
    },
    '/root/josh/readme.md': {
        path: '/root/josh/readme.md',
        type: 'file',
        content: 'File Content goes here.'
    },
    '/root/jsrehanek': {
        path: '/root/jsrehanek',
        type: 'folder',
        children: ['/root/jsrehanek/projects', '/root/jsrehanek/vblogs'],
    },
    '/root/jsrehanek/projects': {
        path: '/root/jsrehanek/projects',
        type: 'folder',
        children: ['/root/jsrehanek/projects/treeview'],
    },
    '/root/jsrehanek/projects/treeview': {
        path: '/root/jsrehanek/projects/treeview',
        type: 'folder',
        children: [],
    },
    '/root/jsrehanek/vblogs': {
        path: '/root/jsrehanek/vblogs',
        type: 'folder',
        children: [],
    },
};


export default class Tree extends Component {

    state = {
        nodes: data,
    };

    getRootNodes = () => {
        const { nodes } = this.state;
        return values(nodes).filter(node => node.isRoot === true);
    }

    getChildNodes = (node) => {
        const { nodes } = this.state;
        if (!node.children) return [];
        return node.children.map(path => nodes[path]);
    }

     onToggle = (node) => {
         const { nodes } = this.state;
         nodes[node.path].isOpen = !node.isOpen;
         this.setState({ nodes });
     }

    render() {
        const rootNodes = this.getRootNodes();
        return (
            <>
                { rootNodes.map(node => (
                    <TreeNode
                        node={node}
                        getChildNodes={this.getChildNodes}
                        onToggle={this.onToggle}
                    />
                ))}
            </>
        )
    }
}
