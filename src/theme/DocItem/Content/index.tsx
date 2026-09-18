import React from 'react';
import Content from '@theme-original/DocItem/Content';
import type ContentType from '@theme/DocItem/Content';
import type {WrapperProps} from '@docusaurus/types';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import PageMeta, {type PageFrontMatter} from '@site/src/components/PageMeta';

type Props = WrapperProps<typeof ContentType>;

// Wraps every doc page: adds the metadata header (status, owner, reviewers, audiences,
// governance references) above the page content.
export default function ContentWrapper(props: Props): React.JSX.Element {
  const {frontMatter} = useDoc();
  return (
    <>
      <PageMeta fm={frontMatter as PageFrontMatter} />
      <Content {...props} />
    </>
  );
}
