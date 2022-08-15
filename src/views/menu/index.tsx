import type { FC } from 'react'
import { useState, useEffect } from 'react'
import type { CheckboxEvent } from '@douyinfe/semi-ui/checkbox'
import type { TreeNodeData } from '@douyinfe/semi-ui/tree'
import { Tree, Card, ButtonGroup, Button, Checkbox } from '@douyinfe/semi-ui'
import MenuServe from '@/api/menu'

interface IMenu {
  createBy: Nullable<string>
  createTime: Nullable<string>
  icon: Nullable<string>
  isDel: number
  menuId: number
  menuName: string
  menuType: Nullable<string>
  orderNum: Nullable<number>
  parentId: number
  parentName: Nullable<string>
  path: string
  perms: string
  remark: string
  status: number
  updateBy: Nullable<string>
  updateTime: Nullable<string>
  children: IMenu[]
  key?: string
  label?: string
}

const Page: FC = () => {
  const [treeData, setTreeData] = useState<TreeNodeData[]>([])
  const [checked, setChecked] = useState<boolean>(false)
  const [checkedList, setCheckedList] = useState<string[]>([])

  const handleAdd = (row: IMenu) => {
    console.log(row)
  }
  const handleDelate = (row: IMenu) => {
    console.log(row)
  }

  const handleCheckChange = (data: CheckboxEvent) => {
    const checkedValue = data.target.checked as boolean
    setChecked(checkedValue)
    const checkedListValue = checkedValue ? ['1'] : []

    setCheckedList(checkedListValue)
  }

  const button = (row: IMenu) => (
    <ButtonGroup size="small" theme="borderless">
      <Button
        onClick={(e: Event) => {
          e.stopPropagation()
          handleAdd(row)
        }}
      >
        添加
      </Button>
      <Button
        type="danger"
        onClick={(e: Event) => {
          e.stopPropagation()
          handleDelate(row)
        }}
      >
        删除
      </Button>
    </ButtonGroup>
  )

  useEffect(() => {
    const getList = async () => {
      const { data } = await MenuServe.getList()

      const getData = (data: IMenu[]) => {
        function generateData(data: IMenu[]): any[] {
          return data.map(item => {
            return {
              ...item,
              key: String(item.menuId),
              label: (
                <div
                  style={{
                    display: 'flex',
                    position: 'relative'
                  }}
                >
                  <span>{item.menuName}</span>
                  <span
                    style={{
                      position: 'absolute',
                      right: 0,
                      top: '50%',
                      transform: 'translateY(-50%)'
                    }}
                  >
                    {button({ ...item, key: String(item.menuId), label: item.menuName })}
                  </span>
                </div>
              ),
              children: generateData(item.children)
            }
          })
        }
        return generateData(data)
      }
      const res = getData(data)
      setTreeData(res)
    }
    getList()
  }, [])

  return (
    <Card>
      <Checkbox checked={checked} onChange={handleCheckChange}>
        全选
        {checkedList}
      </Checkbox>
      <Tree
        value={checkedList}
        multiple
        treeData={treeData}
        defaultExpandAll
        style={{ width: 340 }}
      />
    </Card>
  )
}

export default Page
