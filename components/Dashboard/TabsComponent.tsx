'use client';
import { Tabs, rem } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import EdibleRateTable from './EditableRateTable';

export default function TabMain() {
  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <Tabs defaultValue="car">
      <Tabs.List>
        <Tabs.Tab value="car" leftSection={<IconPhoto style={iconStyle} />}>
          Cars
        </Tabs.Tab>
        <Tabs.Tab value="traveller" leftSection={<IconMessageCircle style={iconStyle} />}>
          Traveller
        </Tabs.Tab>
        <Tabs.Tab value="urbania" leftSection={<IconSettings style={iconStyle} />}>
          Urbania
        </Tabs.Tab>
        <Tabs.Tab value="bus" leftSection={<IconSettings style={iconStyle} />}>
          Bus
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="car">
        <EdibleRateTable id="car" />
      </Tabs.Panel>

      <Tabs.Panel value="traveller">
        {' '}
        <EdibleRateTable id="traveller" />
      </Tabs.Panel>

      <Tabs.Panel value="urbania">
        <EdibleRateTable id="urbania" />
      </Tabs.Panel>
      <Tabs.Panel value="bus">
        <EdibleRateTable id="bus" />
      </Tabs.Panel>
    </Tabs>
  );
}
