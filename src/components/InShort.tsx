import React, {type ReactNode} from 'react';

/** Plain-language summary box shown at the top of every page. Keep it to three bullets. */
export default function InShort({children}: {children: ReactNode}) {
  return (
    <div className="in-short">
      <div className="in-short__title">In short</div>
      {children}
    </div>
  );
}
