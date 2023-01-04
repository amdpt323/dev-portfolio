export default function cmjs({name , email ,message}) {
  const date = new Date()
  const currentDate =
    date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()

  return (
    <div className='cm-js'>
      <div className='cm-js-center'>
        <div className='flex'>
          <p className='a3 pr-10'>const</p>
          <p className='s3 pr-10'>button</p>
          <p className='a3 pr-10'>=</p>
          <p className='s3'>document.querySelector</p>
          <p>{`(`}</p>
          <p className='a1'>&apos;#sendBtn&apos;</p>
          <p>{`);`}</p>
        </div>
        <br />
        <div className='flex'>
          <p className='a3 pr-10'>const</p>
          <p className='s3 pr-10'>message</p>
          <p className='a3 pr-10'>=</p>
          <p>{`{`}</p>
        </div>
        <div className='flex pl-20'>
          <p className='s3'>name</p>
          <p className='pr-10'>{`:`}</p>
          <div className='word-wrap'>{`"${name}"`}</div>
          <p>{`,`}</p>
        </div>
        <div className='flex pl-20'>
          <p className='s3'>email</p>
          <p className='pr-10'>{`:`}</p>
          <div className='word-wrap'>{`"${email}"`}</div>
          <p>{`,`}</p>
        </div>
        <div className='flex pl-20'>
          <p className='s3'>message</p>
          <p className='pr-10'>{`:`}</p>
          <div className='word-wrap'>{`"${message}"`}</div>
          <p>{`,`}</p>
        </div>
        <div className='flex pl-20'>
          <p className='pr-10'>date:</p>
          <p className='a1'>{`"${currentDate}"`}</p>
        </div>
        <p>{`}`}</p>
        <br />
        <div className='flex'>
          <p className='s3'>button.addEventListner</p>
          <p>{`(`}</p>
          <p className='a1'>&apos;click&apos;</p>
          <p className='pr-10'>{`,  () `}</p>
          <p className='a3 pr-10'>{`=>`}</p>
          <p>{`{`}</p>
        </div>
        <div className='flex pl-20'>
          <p className='s3'>form.send</p>
          <p>{`(`}</p>
          <p className='s3'>message</p>
          <p>{`);`}</p>
        </div>
        <div className='flex'>
          <p>{`})`}</p>
        </div>
      </div>
    </div>
  )
}
