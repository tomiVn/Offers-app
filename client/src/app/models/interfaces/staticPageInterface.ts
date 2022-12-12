
export interface IStaticPage{
    title: string;
    image: string;
    content: IContent[];       
}

interface IContent{
    header: string;
      text: string[];
}