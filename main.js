
        function updateStockData() {
            
            const totalStock = Math.floor(Math.random() * 1000);
            const soldStock = Math.floor(Math.random() * totalStock);

            document.getElementsByClassName('main-orders').textContent = totalStock;
            document.getElementsByClassName('cards').textContent = soldStock;
        }
        setInterval(updateStockData, 5000);

        updateStockData();