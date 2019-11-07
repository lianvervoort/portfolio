import React from 'react';
import { storiesOf } from '@storybook/react';

import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import mi from "../static/mi.pdf";


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const number= 1;
const number2= 2;
const number3= 3;

storiesOf('Mi', module)
  .add('wat is een mi', () => (
  <Document file={mi}>
   <Page pageNumber={number} />
    <Page pageNumber={number2} />
     <Page pageNumber={number3} />
        </Document>
  ));
