import React from 'react';
import { Field, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type DemoNevenaProps = ComponentProps & {
  fields: {
    title: Field<string>;
    description: Field<string>;
  };
};

export const Default = (props: DemoNevenaProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <div className={`component ${props.params.styles}`} id={id ? id : undefined}>
      <div className="component-content">
        <p>DemoNevena Component</p>

        <Text tag="h2" field={props.fields?.title} />
        <Text tag="h5" field={props.fields?.description} />
      </div>
    </div>
  );
};