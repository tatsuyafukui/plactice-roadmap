import React from 'react';
import Heading from '../../Atoms/Heading';
import Txt from '../../Atoms/Txt';
import Image from '../../Atoms/Image';
import { ImageName } from '../../../constants';
import style from './style.css';
import Button from '../../Atoms/Button';
import { Link } from 'gatsby';
import { ISection } from '../../../types/section';
import {InlineSection} from "../../Atoms/Section";

const CreativeSection: React.FC<ISection> = props => {
  return (
    <InlineSection>
      <div style={{padding: '40px'}}>
        <Image imageName={ImageName.successImage} />
      </div>
      <div>
        <div>
          <Heading>{props.heading}</Heading>
          <Txt>{props.content}</Txt>
          <div className={style.buttonContainer}>
            <Link to={'/'}>
              <Button>みんなの成果物</Button>
            </Link>
            <Link to={'/'}>
              <Button>目標を設定する</Button>
            </Link>
          </div>
        </div>
      </div>
    </InlineSection>
  );
};

export default CreativeSection;
