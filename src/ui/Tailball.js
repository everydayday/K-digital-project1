

export default function Tailball({n}) {
    // const colorObj = {
    //     'blue' : 'bg-blue-800',
    //     'red' : 'bg-red-800',
    //     'orange' : 'bg-orange-800',
    //     'lime' : 'bg-lime-800'
    //   }
      
    // const attr = `rounded-l-lg ${colorObj[color]} `

    const bColor = [
        'bg-red-300',
        'bg-orange-300',
        'bg-lime-300',
        'bg-blue-300',
        'bg-purple-300'
    ]
    // 문자열 배열 입력
    const ballColor = `w-10 h-10
                flex justify-center items-center
                rounded-full ${bColor[parseInt(n/10)]}
                text-white font-bold `

    return (
    <div className = {ballColor}>
      {n}
    </div>
  )
}
