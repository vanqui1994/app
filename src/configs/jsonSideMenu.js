const jsonMenu  = {
    menu : [
        {
            'id' : 1,
            'name' : 'Thời sự',
            'url' : 'thoi-su.json',
            'children' : [
                {
                    'id' : 2,
                    'name' : 'Chính trị',
                    'url' : 'chinh-tri.json',
                },
                {
                    'id' : 3,
                    'name' : 'Đô thị',
                    'url' : 'do-thi.json',
                },
                {
                    'id' : 4,
                    'name' : 'Giao thông',
                    'url' : 'giao-thong.json',
                }
            ]
        },
        {
            'id' : 5,
            'name' : 'Pháp luật',
            'url' : 'phap-luat.json',
            'children' : [
                {
                    'id' : 6,
                    'name' : 'Pháp đình',
                    'url' : 'phap-dinh.json',
                },
                {
                    'id' : 7,
                    'name' : 'Vụ án',
                    'url' : 'vu-an.json',
                }
            ]
        },
        {
            'id' : 8,
            'name' : 'Thế giới',
            'url' : 'the-gioi.json',
            'children' : [
                {
                    'id' : 9,
                    'name' : 'Quân sự',
                    'url' : 'quan-su.json',
                },
                {
                    'id' : 10,
                    'name' : 'Tư liệu',
                    'url' : 'tu-lieu.json',
                }
            ]
        }
    ]
}

export default jsonMenu;