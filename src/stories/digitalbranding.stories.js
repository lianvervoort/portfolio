import React from 'react';
import { storiesOf } from '@storybook/react';

import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import DB from "../static/DB.pdf";



pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const number= 1;
const number2= 2;
const number3= 3;
const number4= 4;



storiesOf('Digital branding', module)
  .add('Wat is digital branding?', () => (
      <Document file={DB}>
   <Page pageNumber={number} />
    <Page pageNumber={number2} />
     <Page pageNumber={number3} />
     <Page pageNumber={number4} />

        </Document>

  ));
