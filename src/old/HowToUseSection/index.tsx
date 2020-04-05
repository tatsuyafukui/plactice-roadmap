import React from 'react';
import style from './style.css';
import Heading from '../../components/Atoms/Heading';
import { Level } from '../../constants';
import HowToUseItem from '../../components/Molecules/HowToUseItem';
import { IList } from '../../types/list';
import Section from '../../components/Atoms/Section';

const HowToUseSection: React.FC<{ list: IList[] }> = props => {
  return (
    <Section>
      <Heading level={Level.h1}>ロードマップを使った学び方</Heading>

      {props.list.map(item => {
        return <HowToUseItem key={item.id} {...item} />;
      })}
    </Section>
  );
};

export default HowToUseSection;