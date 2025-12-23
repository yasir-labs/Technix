import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import React from "react";
import BlogDetailsPostbox from "./blog-details-postbox";
import FooterContact from "@/src/layout/footers/footer-contact";
import HeaderTwo from "@/src/layout/headers/header-2";
import FooterTwo from "@/src/layout/footers/footer-2";

const BlogDetails = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title="Blog Details" page_title="Blog Details" />
        <BlogDetailsPostbox />
        <FooterContact bg_style={true} />
      </main>
      <FooterTwo />
    </>
  );
};

export default BlogDetails;
