// components
import PreviewBanner from "components/Banner/PreviewBanner";
import SEO from "components/SEO/SEO";
import ScrollToTopButton from "components/Buttons/ScrollToTopButton";
// utils
import { noop } from "utils/utilFns";

type Props = {
  header?: React.Component | JSX.Element | JSX.Element[] | null;
  footer?: React.Component | JSX.Element | JSX.Element[] | null;
  metaTags: React.Component | JSX.Element | JSX.Element[];
  isPreview?: boolean;
  deactivatePreviewMode?: () => void;
};

const Layout: React.FC<Props> = ({
  children,
  header = null,
  footer = null,
  deactivatePreviewMode = noop,
  isPreview = false,
  metaTags,
}) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <SEO>{metaTags}</SEO>
      {isPreview && <PreviewBanner onLeavePreviewBtnClick={deactivatePreviewMode} />}
      {header}
      <main id="main" className="flex flex-col flex-grow w-full mx-auto">
        {children}
      </main>
      {footer}
      <ScrollToTopButton />
    </div>
  );
};

export default Layout;
