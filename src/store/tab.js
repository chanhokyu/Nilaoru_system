export default {
    state: {
        isCollapse: false, //控制菜单的展开还是收起
        tabList: [
            {
                path: "/",
                name: "home",
                label: "首页",
                icon: "s-home",
                url: "Home/Home",
            }
        ]//面包屑
    },
    mutations: {
        //修改菜单展开收起的方法
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
        //更新面包屑
        selectMenu(state, value) {
            if (value.name !== 'home') {
                let res = state.tabList.findIndex(item => {
                    return item.name === value.name
                })
                if (res === -1) state.tabList.push(value)
            }
        }
    }
}