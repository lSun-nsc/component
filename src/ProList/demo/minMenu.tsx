import React from 'react';
import { EllipsisOutlined } from '@ant-design/icons';
import { ProList } from '@wetrial/component';

const dataSource = [
  { title: '分组标题', children: [{ title: '语雀的天空' }, { title: 'Ant Design' }] },
  { title: '分组标题', children: [{ title: '蚂蚁金服体验科技' }, { title: 'TechUI' }] },
];

export default () => (
  <div
    style={{
      width: '320px',
      padding: 24,
      background: '#ddd',
    }}
  >
    <ProList<{
      title: string;
      children: {
        title: string;
      }[];
    }>
      rowKey="id"
      dataSource={dataSource}
      split={false}
      style={{
        background: '#FFF',
      }}
      renderItem={(item) => ({
        title: item.title,
        actions: item.children && [
          <a key="invert">邀请</a>,
          <a key="operator">操作</a>,
          <a key="outer">
            <EllipsisOutlined />
          </a>,
        ],
        type: 'inline',
        avatar:
          'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
      })}
    />
  </div>
);
