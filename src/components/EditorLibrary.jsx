import React, { useEffect, useState } from 'react';
import { Tree, Skeleton } from 'antd';
import useLocalAPI from '@/hooks/useLocalAPI';
import { Button, InputGroup, Form } from 'react-bootstrap';
import ENVS from '@/lib/envs';
const { DirectoryTree } = Tree;



const EditorLibrary = () => {
  const { results, loading } = useLocalAPI({ values: [] })
  const [libraryData, setLibraryData] = useState(null)

  useEffect(() => {
    if (results) {
      let res = []
      for (const r of results.results) {
        res.push(
          {
            title: r.senotypejson.senotype.name,
            key: `${r.senotypeid}-parent`,
            children: [
              { title: `Version 1 ${r.senotypeid}`, key: r.senotypeid, isLeaf: true },
            ]
          }
        )
      }
      setLibraryData(res)
    }
  }, [results])

  const onSelect = (keys, info) => {
    console.log('Trigger Select', keys, info);
  };
  const onExpand = (keys, info) => {
    console.log('Trigger Expand', keys, info);
  };
  return (
    <div className='p-2' style={{maxHeight: 500, overflowY: 'auto'}}>
      <h2 className='h4 mx-3 mb-3'>{ENVS.app.name} Library</h2>
         <InputGroup  className="mb-3">
         <Form.Control
          aria-label="Search"
          aria-describedby="inputGroup-sizing-sm"
        />
        <InputGroup.Text id="inputGroup-sizing-sm">Search</InputGroup.Text>
        
      </InputGroup>
      {loading && <Skeleton />}
      {libraryData && <DirectoryTree
        multiple
        draggable={false}
        defaultExpandAll
        onSelect={onSelect}
        onExpand={onExpand}
        treeData={libraryData}
      />}
    </div>
  );
};
export default EditorLibrary;