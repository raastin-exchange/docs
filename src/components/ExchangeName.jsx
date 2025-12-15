import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function ExchangeName({ en = false }) {
  const { siteConfig } = useDocusaurusContext();
  return en ? siteConfig.customFields.exchangeNameEn : siteConfig.customFields.exchangeName;
}
