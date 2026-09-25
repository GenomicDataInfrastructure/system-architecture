import MDXComponents from '@theme-original/MDXComponents';
import GovRef from '@site/src/components/GovRef';
import InShort from '@site/src/components/InShort';
import Cite from '@site/src/components/Cite';
import Diagram from '@site/src/components/Diagram';
import Term, {AcronymTable} from '@site/src/components/Term';
import {TraceabilityMatrix, DocumentStatus, SourceRegister, WritingOrder} from '@site/src/components/Tables';

// Components available in every .md/.mdx page without an import.
export default {
  ...MDXComponents,
  GovRef,
  InShort,
  Cite,
  Diagram,
  Term,
  AcronymTable,
  TraceabilityMatrix,
  DocumentStatus,
  SourceRegister,
  WritingOrder,
};
