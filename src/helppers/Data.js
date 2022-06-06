let dataJson;
async function Data(){
        try {
          const resp = await fetch('./data.json')
          const data = await resp.json()
          dataJson = data
          if(!resp.ok) throw { status: resp.status, statusText: resp.statusText}
        } catch (error) {
          let message = error.statusText || "Ha ocurrido un error"
          alert(`Error ${error.status}: ${message}`)
        }
}
Data()