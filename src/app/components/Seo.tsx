import React from "react";
import { URL_MAIN } from "../services/variables";

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
        <meta property="og:image" content={`https://edgarricardo.github.io/babyshowerke/LEON.png`}/>

        <title>{title}</title>
        <link rel="icon" href={`${URL_MAIN}/favicon.ico`} />
      
    </>
  );
};

export default Seo;
