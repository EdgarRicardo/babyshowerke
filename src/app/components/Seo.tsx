import React from "react";

interface LayoutProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const Seo: React.FC<LayoutProps> = ({
  title = "Baby Shower",
  description = "Te invitamos al baby shower!",
}) => {
  return (
    <>
      
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta name="keywords" content="" />
        <meta name="author" content="Edgar Ricardo Corona Mendoza" />
        <meta name="robots" content="index, follow" />

        <title>{title}</title>
        <link rel="icon" href="/hogero/favicon.ico" />
      
    </>
  );
};

export default Seo;
