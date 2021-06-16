import React, { Component } from 'react';
import values from 'lodash/values';


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
    '/root/david/readme.md': {
      path: '/root/david/readme.md',
      type: 'file',
      content: 'Thanks for reading me me. But there is nothing here.'
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
  

export default function Tree() {
    return (
        <div>
            
        </div>
    )
}
