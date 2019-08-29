import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Tabs, TabView } from './';

const TestView: React.FC<{ header: string; imageSrc: string }> = ({
  header,
  imageSrc
}) => (
  <div style={{ borderTop: '1px solid rgba(245, 245, 245)', padding: 10 }}>
    <h1>{header}</h1>
    <img
      alt="cute puppy!!!"
      src={imageSrc}
      style={{ width: 600, height: 400 }}
    />
  </div>
);

const Views: React.FC = () => (
  <React.Fragment>
    <TabView id="test-1">
      <TestView
        header="Test 1"
        imageSrc="http://cdn.akc.org/content/article-body-image/siberian_husky_cute_puppies.jpg"
      />
    </TabView>
    <TabView id="test-2">
      <TestView
        header="Test 2"
        imageSrc="https://www.cheatsheet.com/wp-content/uploads/2017/10/chow-chow-puppy.jpg"
      />
    </TabView>
    <TabView id="test-3">
      <TestView
        header="Test 3"
        imageSrc="https://dogtime.com/assets/uploads/2015/05/file_21702_impossibly-cute-puppy-30-1280x720.jpg"
      />
    </TabView>
  </React.Fragment>
);

storiesOf('Core Comps | Tabs', module)
  .add('default', () => {
    return (
      <Tabs
        tabs={[
          { id: 'test-1', ariaLabel: 'Test', label: 'Test 1' },
          { id: 'test-2', ariaLabel: 'Test', label: 'Test 2' },
          { id: 'test-3', ariaLabel: 'Test', label: 'Test 3' }
        ]}
      >
        <Views />
      </Tabs>
    );
  })
  .add('with default active tab', () => {
    return (
      <Tabs
        tabs={[
          { id: 'test-1', ariaLabel: 'Test', label: 'Test 1' },
          { id: 'test-2', ariaLabel: 'Test', label: 'Test 2' },
          { id: 'test-3', ariaLabel: 'Test', label: 'Test 3' }
        ]}
        defaultActiveTab="test-3"
      >
        <Views />
      </Tabs>
    );
  })
  .add('compact', () => {
    return (
      <Tabs
        tabs={[
          { id: 'test-1', ariaLabel: 'Test', label: 'Test 1' },
          { id: 'test-2', ariaLabel: 'Test', label: 'Test 2' },
          { id: 'test-3', ariaLabel: 'Test', label: 'Test 3' }
        ]}
        defaultActiveTab="test-3"
        compact
      >
        <Views />
      </Tabs>
    );
  });
